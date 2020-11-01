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
    const { score } = useScoreTracking()

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

    return {
        isPlaying: computed(() => isPlaying.value),
        nextRound,
        currentRound: computed(() => currentRound.value),
        hasWon,
        play,
        pause,
        logOperations,
        startedAt: computed(() => startedAt.value)
    }


}