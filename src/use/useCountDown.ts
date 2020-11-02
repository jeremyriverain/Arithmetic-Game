import { watch, ref, computed } from 'vue'
import useGameState from './useGameState'
import useGameSettings from './useGameSettings'

const { maxResolutionTime } = useGameSettings();

const countDown = ref(maxResolutionTime);
const interval = ref(0);


export default function useCountDown () {

    const reset = () => {
        countDown.value = maxResolutionTime
    }

    const start = () => {
        if (interval.value) { // cleanup previous interval
            clearInterval(interval.value)
        }

        interval.value = setInterval(() => {
            if (countDown.value <= 0) {
                console.log('0', countDown.value);
                return
            }
            countDown.value--;
        }, 1000);
    }

    const pause = () => {
        if (!interval.value) {
            return
        }
        clearInterval(interval.value)
    }

    const formatTimeElapsed = (startTimestamp: number, endTimestamp: number): string => {

        const timeElapsed = endTimestamp - startTimestamp

        let diffInHrs = timeElapsed / 3600000;
        let hh = Math.floor(diffInHrs);

        let diffInMin = (diffInHrs - hh) * 60;
        let mm = Math.floor(diffInMin);

        let diffInSec = (diffInMin - mm) * 60;
        let ss = Math.floor(diffInSec);

        let diffInMs = (diffInSec - ss) * 100;
        let ms = Math.floor(diffInMs);

        let formattedMM = mm.toString().padStart(2, "0");
        let formattedSS = ss.toString().padStart(2, "0");
        let formattedMS = ms.toString().padStart(2, "0");

        return `${formattedMM}:${formattedSS}:${formattedMS}`;
    }

    return {
        reset,
        start,
        pause,
        countDown: computed(() => countDown.value),
        formatTimeElapsed
    };
}