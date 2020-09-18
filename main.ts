input.onButtonPressed(Button.A, function () {
    basic.showString("Jin")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
/**
 * - a버튼 : 내이름
 * 
 * - b버튼 : 나이
 * 
 * - a+b : s나의 꿈
 * 
 * - 흔들면 : 지우기
 */
input.onButtonPressed(Button.AB, function () {
    basic.showString("Teacher")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(25)
})
