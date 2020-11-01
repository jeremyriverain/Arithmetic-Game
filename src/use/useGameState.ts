import { ref, computed } from 'vue';
import useGameSettings from '@/use/useGameSettings'
import useScoreTracking from '@/use/useScoreTracking'

const isPlaying = ref(true)

const currentRound = ref(1)

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

    return {
        isPlaying,
        nextRound,
        currentRound: computed(() => currentRound.value),
        hasWon
    }


}