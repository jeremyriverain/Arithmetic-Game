import { ref, computed } from 'vue';
import useGameSettings from '@/use/useGameSettings'
import useScoreTracking from '@/use/useScoreTracking'

const isPlaying = ref(false)

const currentRound = ref(1)

const startedAt = ref('')

const logOperations = ref([])

export default function useGameState () {

    const nextRound = () => {
        currentRound.value++
    }

    const { winningScore } = useGameSettings()
    const { score, resetScore } = useScoreTracking()

    const hasWon = computed(() => {
        console.log('has won', score, winningScore);
        return score.value >= winningScore
    })

    const play = () => {
        if (startedAt.value === '') {
            const date = new Date()
            startedAt.value = date.toISOString()
        }

        isPlaying.value = true
    }

    const pause = () => {
        isPlaying.value = false
    }

    const restart = () => {
        isPlaying.value = false
        currentRound.value = currentRound.value === 1 ? 0 : 1
        startedAt.value = ''
        logOperations.value = []

        resetScore()

        play()
    }

    return {
        isPlaying: computed(() => isPlaying.value),
        nextRound,
        currentRound: computed(() => currentRound.value),
        hasWon,
        play,
        pause,
        restart,
        logOperations,
        startedAt: computed(() => startedAt.value)
    }


}