import { ref, computed, watch, Ref } from 'vue';
import { useGameSettings } from '@/use/useGameSettings'
import useScoreTracking from '@/use/useScoreTracking'
import useCountDown from '@/use/useCountDown'
import useHealthTracking from '@/use/useHealthTracking'

import LogOperation from '@/model/logOperation';
const isPlaying = ref(false)

const operationTrackIndex = ref(1)

const startedAt: Ref<number | null> = ref(null)
const finishedAt: Ref<number | null> = ref(null)

const logOperations: Ref<LogOperation[]> = ref([])

export default function useGameState () {

    const nextOperation = () => {
        operationTrackIndex.value++
    }

    const { winningScore } = useGameSettings()
    const { score, resetScore, addScore } = useScoreTracking()
    const { loseHealth, healthPoints, resetHealth } = useHealthTracking()

    const hasWon = computed(() => {
        const hasWon = healthPoints.value > 0 && score.value >= winningScore.value
        console.log('has won', score, winningScore, hasWon);
        return hasWon
    })

    const hasLost = computed(() => {
        return healthPoints.value <= 0
    })

    const { start: startCountDown, countDown, reset: resetCountDown, pause: pauseCountDown } = useCountDown()


    const play = () => {
        if (hasWon.value || hasLost.value || startedAt.value === null || (startedAt.value && finishedAt.value)) { //it's a new game
            startedAt.value = Date.now()
            finishedAt.value = null
            resetScore()
            resetCountDown()
            nextOperation()
            resetHealth()
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

        finishedAt.value = Date.now()

        operationTrackIndex.value = operationTrackIndex.value === 1 ? 0 : 1

    }

    watch(countDown, val => {
        if (val <= 0) {
            loseHealth()
            resetCountDown()
            nextOperation()
        }
    })

    watch([hasLost, hasWon], ([newHasLost, newHasWon]) => {
        console.log('new has won', newHasWon);
        console.log('new has lost', newHasLost);
        if (newHasWon || newHasLost) {
            stop()
        }
    })

    const onOperationError = (e: LogOperation) => {
        console.log("on error", e);

        e.setMessage(`${e.getOperationNodes().join(' ')} = ${e.getExpectedResult()}`)
        logOperations.value.unshift(e)
        loseHealth()
        resetCountDown()
        nextOperation()

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
        hasLost,
        play,
        pause,
        stop,
        logOperations: computed(() => logOperations.value),
        finishedAt,
        startedAt: computed(() => startedAt.value),
        onOperationError,
        onOperationSuccess,
    }


}