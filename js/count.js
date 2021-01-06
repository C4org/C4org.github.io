import { CountUp } from './countUp.min.js';

let time_start = 2200;
let time_start_2 = 1500;
let past_width = null;
let trigger_width = 767;
const count1 = 7;
const count2 = 195;
const count3 = 2;
const count4 = 960+1344;

let demo = new CountUp('countUp1', count1, { duration: 3 });
setTimeout(function () {
    demo.start();
}, time_start);

let demo1 = new CountUp('countUp2', count2, { duration: 3 });
setTimeout(function () {
    demo1.start();
}, time_start);

let demo2 = new CountUp('countUp3', count3, { duration: 3 });
setTimeout(function () {
    demo2.start();
}, time_start);

let demo3 = new CountUp('countUp4', count4, {
    prefix: '$',
});
setTimeout(function () {
    demo3.start();
}, time_start);

update();

function update() {
    if ((document.documentElement.clientWidth > trigger_width > past_width) || (document.documentElement.clientWidth < trigger_width < past_width) || past_width == null) {
        let demo = new CountUp('countUp1', count1, { duration: 3 });
        setTimeout(function () {
            demo.start();
        }, time_start);

        let demo1 = new CountUp('countUp2', count2, { duration: 3 });
        setTimeout(function () {
            demo1.start();
        }, time_start);

        let demo2 = new CountUp('countUp3', count3, { duration: 3 });
        setTimeout(function () {
            demo2.start();
        }, time_start);

        let demo3 = new CountUp('countUp4', count4, {
            prefix: '$',
        });
        setTimeout(function () {
            demo3.start();
        }, time_start);
        let demo5 = new CountUp('countUp5',count1, { duration: 3 });
        setTimeout(function () {
            demo5.start();
        }, time_start_2);

        let demo6 = new CountUp('countUp6', count2, { duration: 3 });
        setTimeout(function () {
            demo6.start();
        }, time_start_2);

        let demo7 = new CountUp('countUp7', count3, { duration: 3 });
        setTimeout(function () {
            demo7.start();
        }, time_start_2);

        let demo8 = new CountUp('countUp8', count4, {
            prefix: '$',
        });
        setTimeout(function () {
            demo8.start();
        }, time_start_2);
    }
    past_width = document.documentElement.clientWidth;
}

window.addEventListener('resize', function (event) {
    update()
});