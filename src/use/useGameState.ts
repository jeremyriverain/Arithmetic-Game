import { ref, computed, watch, Ref } from 'vue';
import useGameSettings from '@/use/useGameSettings'
import useScoreTracking from '@/use/useScoreTracking'
import useCountDown from '@/use/useCountDown'
import LogOperation from '@/model/logOperation';
const isPlaying = ref(false)

const operationTrackIndex = ref(1)

const startedAt = ref('')

const logOperations: Ref<LogOperation[]> = ref([])

export default function useGameState () {

    const nextOperation = () => {
        operationTrackIndex.value++
    }

    const { winningScore } = useGameSettings()
    const { score, resetScore, addScore } = useScoreTracking()

    const hasWon = computed(() => {
        console.log('has won', score, winningScore);
        return score.value >= winningScore
    })

    const { start: startCountDown, countDown, reset: resetCountDown, pause: pauseCountDown } = useCountDown()

    const play = () => {
        if (startedAt.value === '') { //it's a new game
            const date = new Date()
            startedAt.value = date.toISOString()
            resetCountDown()
            logOperations.value = []
        }

        startCountDown()

        isPlaying.value = true
        console.log(isPlaying.value, 'is playing');
    }

    const pause = () => {
        isPlaying.value = false
        pauseCountDown()
    }

    const stop = () => {
        isPlaying.value = false
        pauseCountDown()
        resetCountDown()

        operationTrackIndex.value = operationTrackIndex.value === 1 ? 0 : 1
        startedAt.value = ''

        resetScore()
    }

    watch(countDown, val => {
        if (val <= 0) {
            resetCountDown()
            nextOperation()
        }
    })

    const onOperationError = (e: LogOperation) => {
        console.log("on error", e);
    };

    const onOperationSuccess = (e: LogOperation) => {
        console.log("on success", e);

        const gain = countDown.value

        e.setMessage(`+ ${gain}`)
        logOperations.value.unshift(e)
        addScore(gain)
        resetCountDown()
        nextOperation()
    };

    return {
        isPlaying: computed(() => isPlaying.value),
        operationTrackIndex: computed(() => operationTrackIndex.value),
        hasWon,
        play,
        pause,
        stop,
        logOperations: computed(() => logOperations.value),
        startedAt: computed(() => startedAt.value),
        onOperationError,
        onOperationSuccess
    }


}