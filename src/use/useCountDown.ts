import { watch, ref, computed } from 'vue'
import useGameState from './useGameState'
import useGameSettings from './useGameSettings'

const { maxResolutionTime } = useGameSettings();
const { isPlaying, nextRound, currentRound } = useGameState();

const countDown = ref(maxResolutionTime);
const interval = ref(0);


export default function useCountDown () {

    const startInterval = () => {
        if (interval.value) { // cleanup previous interval
            clearInterval(interval.value)
        }
        if (isPlaying.value) {
            interval.value = setInterval(() => {
                if (countDown.value <= 0) {
                    nextRound()
                    resetCountDown()
                    return
                }
                countDown.value--;
            }, 1000);
        } else {
            clearInterval(interval.value);
        }
    }

    watch(
        [isPlaying],
        () => {
            startInterval()
        },
        {
            immediate: true,
        }
    );


    watch(currentRound, () => {
        resetCountDown()
        startInterval()
    })

    const resetCountDown = () => {
        countDown.value = maxResolutionTime
    }

    return {
        resetCountDown,
        countDown: computed(() => countDown.value),
    };
}