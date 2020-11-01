import { ref, computed } from 'vue';

const isPlaying = ref(true)

const currentRound = ref(1)

export default function useGameState () {

    const nextRound = () => {
        currentRound.value++
    }

    return {
        isPlaying,
        nextRound,
        currentRound: computed(() => currentRound.value)

    }


}