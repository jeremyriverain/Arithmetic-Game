export default class Settings {
    constructor(
        public minMaxNumbers: (number)[] = [0, 15],
        public numberOfOperands: number = 3,
        public operators: ('+' | '-' | '*')[] = ['+', '-'],
        public maxResolutionTime: number = 10,
        public winningScore: number = 30,
        public healthPoints: number = 3
    ) {

    }
}