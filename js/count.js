import { CountUp } from './countUp.min.js';

let time_start = 2200;
let time_start_2 = 1500;
let past_width = null;
let trigger_width = 767;

let demo = new CountUp('countUp1', 7, { duration: 3 });
setTimeout(function () {
    demo.start();
}, time_start);

let demo1 = new CountUp('countUp2', 195, { duration: 3 });
setTimeout(function () {
    demo1.start();
}, time_start);

let demo2 = new CountUp('countUp3', 2, { duration: 3 });
setTimeout(function () {
    demo2.start();
}, time_start);

let demo3 = new CountUp('countUp4', 2112, {
    prefix: '$',
});
setTimeout(function () {
    demo3.start();
}, time_start);

update();

function update() {
    if ((document.documentElement.clientWidth > trigger_width > past_width) || (document.documentElement.clientWidth < trigger_width < past_width) || past_width == null) {
        let demo = new CountUp('countUp1', 7, { duration: 3 });
        setTimeout(function () {
            demo.start();
        }, time_start);

        let demo1 = new CountUp('countUp2', 195, { duration: 3 });
        setTimeout(function () {
            demo1.start();
        }, time_start);

        let demo2 = new CountUp('countUp3', 2, { duration: 3 });
        setTimeout(function () {
            demo2.start();
        }, time_start);

        let demo3 = new CountUp('countUp4', 2112, {
            prefix: '$',
        });
        setTimeout(function () {
            demo3.start();
        }, time_start);
        let demo5 = new CountUp('countUp5',6, { duration: 3 });
        setTimeout(function () {
            demo5.start();
        }, time_start_2);

        let demo6 = new CountUp('countUp6', 167, { duration: 3 });
        setTimeout(function () {
            demo6.start();
        }, time_start_2);

        let demo7 = new CountUp('countUp7', 2, { duration: 3 });
        setTimeout(function () {
            demo7.start();
        }, time_start_2);

        let demo8 = new CountUp('countUp8', 2112, {
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