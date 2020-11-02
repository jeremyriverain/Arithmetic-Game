import Settings from '@/model/settings'
import { reactive, toRefs, readonly, computed } from 'vue'

const settings = reactive(new Settings())

export function useGameSettings () {
    return {
        ...toRefs(settings)
    }
}

export function setSettings ({ operators, minMaxNumbers, numberOfOperands, winningScore, healthPoints, maxResolutionTime }: Settings) {

    settings.operators = operators
    settings.minMaxNumbers = minMaxNumbers
    settings.numberOfOperands = numberOfOperands
    settings.winningScore = winningScore
    settings.healthPoints = healthPoints
    settings.maxResolutionTime = maxResolutionTime
}