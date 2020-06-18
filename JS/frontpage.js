window.addEventListener('scroll', function () {
     const first = document.querySelector('#first');
     const sectionBonding_first = first.getBoundingClientRect();
     if (
          sectionBonding_first.top <= 1000 &&
          sectionBonding_first.right < (window.innerWidth || document.documentElement.clientWidth) &&
          sectionBonding_first.top >= -200
     ) {
          const line_1 = document.querySelector('#first svg path');
          let pathLength_1 = line_1.getTotalLength();
          line_1.style.strokeDasharray = pathLength_1 + ' ' + pathLength_1;
          line_1.style.strokeDashoffset = pathLength_1;
          window.addEventListener("scroll", function (e) {
               const container_1 = document.querySelector('#first');
               var scrollPercentage_1 = (document.documentElement.scrollTop + 320) / -(container_1.scrollHeight - document.documentElement.clientHeight) + 300;
               var drawLength_1 = pathLength_1 * scrollPercentage_1 * 1.0002;
               line_1.style.strokeDashoffset = pathLength_1 + drawLength_1;

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});






window.addEventListener('scroll', function () {
     const secend = document.querySelector('#secend');
     const sectionBonding_secend = secend.getBoundingClientRect();

     //Selecting the cerain div and bonding of that div
     if (
          sectionBonding_secend.top <= 1000 &&
          sectionBonding_secend.top >= -400

          //specifying where the code should work
     ) {
          const line_2 = document.querySelector('#secend svg path');
          let pathLength_2 = line_2.getTotalLength();
          line_2.style.strokeDasharray = pathLength_2 + ' ' + pathLength_2;
          //Selecting the svg ,taking it's length and making it disappear so it can draw from nothing
          line_2.style.strokeDashoffset = pathLength_2;
          window.addEventListener("scroll", function (e) {
               const container_2 = document.querySelector('#secend');
               var scrollPercentage_2 = (document.documentElement.scrollTop + 420) / 1.969 /
                    (container_2.scrollHeight - document.documentElement.clientHeight) + 300;
               var drawLength_2 = pathLength_2 * scrollPercentage_2;
               line_2.style.strokeDashoffset = pathLength_2 + drawLength_2;
               //The function that makes the drawing, function is counting the scroll position,
               // distance and height and dinamicly changing the lenght and ofset of the svg

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});



window.addEventListener('scroll', function () {
     const third = document.querySelector('#third');
     const sectionBonding_third = third.getBoundingClientRect();
     if (
          sectionBonding_third.top <= 1400 &&
          sectionBonding_third.top >= -300
     ) {
          const line_3 = document.querySelector('#third svg path');
          let pathLength_3 = line_3.getTotalLength();
          line_3.style.strokeDasharray = pathLength_3 + ' ' + pathLength_3;
          line_3.style.strokeDashoffset = pathLength_3;
          window.addEventListener("scroll", function (e) {
               const container_3 = document.querySelector('#third');
               var scrollPercentage_3 = (document.documentElement.scrollTop + 320) / -(container_3.scrollHeight - document.documentElement.clientHeight);
               var drawLength_3 = pathLength_3 * scrollPercentage_3;
               line_3.style.strokeDashoffset = (pathLength_3 + drawLength_3) / 1.5;

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});



window.addEventListener('scroll', function () {
     const first2 = document.querySelector('#firstline');
     const sectionBonding_first2 = first2.getBoundingClientRect();
     if (
          sectionBonding_first2.top <= 900 &&
          sectionBonding_first2.right < (window.innerWidth || document.documentElement.clientWidth) &&
          sectionBonding_first2.top >= -200
     ) {
          const line_1 = document.querySelector('#firstline svg path');
          let pathLength_1 = line_1.getTotalLength();
          line_1.style.strokeDasharray = pathLength_1 + ' ' + pathLength_1;
          line_1.style.strokeDashoffset = pathLength_1;
          window.addEventListener("scroll", function (e) {
               const container_1 = document.querySelector('#firstline');
               var scrollPercentage_1_2 = (document.documentElement.scrollTop + 320) / -(container_1.scrollHeight - document.documentElement.clientHeight) + 300;
               var drawLength_1_2 = pathLength_1 * scrollPercentage_1_2 * 1.0002;
               line_1.style.strokeDashoffset = pathLength_1 + drawLength_1_2;

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});



window.addEventListener('scroll', function () {
     const secend2 = document.querySelector('#secondline');
     const sectionBonding_secend2 = secend2.getBoundingClientRect();

     //Selecting the cerain div and bonding of that div
     if (
          sectionBonding_secend2.top <= 1000 &&
          sectionBonding_secend2.top >= -400

          //specifying where the code should work
     ) {
          const line_2 = document.querySelector('#secondline svg path');
          let pathLength_2 = line_2.getTotalLength();
          line_2.style.strokeDasharray = pathLength_2 + ' ' + pathLength_2;
          //Selecting the svg ,taking it's length and making it disappear so it can draw from nothing
          line_2.style.strokeDashoffset = pathLength_2;
          window.addEventListener("scroll", function (e) {
               const container_2 = document.querySelector('#secondline');
               var scrollPercentage_2_2 = (document.documentElement.scrollTop + 420) / 1.969 /
                    (container_2.scrollHeight - document.documentElement.clientHeight) + 300;
               var drawLength_2_2 = pathLength_2 * scrollPercentage_2_2;
               line_2.style.strokeDashoffset = pathLength_2 + drawLength_2_2;
               //The function that makes the drawing, function is counting the scroll position,
               // distance and height and dinamicly changing the lenght and ofset of the svg

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});



window.addEventListener('scroll', function () {
     const third2 = document.querySelector('#thirdline');
     const sectionBonding_third2 = third2.getBoundingClientRect();
     if (
          sectionBonding_third2.top <= 1400 &&
          sectionBonding_third2.top >= -300
     ) {
          const line_3 = document.querySelector('#thirdline svg path');
          let pathLength_3 = line_3.getTotalLength();
          line_3.style.strokeDasharray = pathLength_3 + ' ' + pathLength_3;
          line_3.style.strokeDashoffset = pathLength_3;
          window.addEventListener("scroll", function (e) {
               const container_3 = document.querySelector('#third');
               var scrollPercentage_3_3 = (document.documentElement.scrollTop + 320) / -(container_3.scrollHeight - document.documentElement.clientHeight);
               var drawLength_3_3 = pathLength_3 * scrollPercentage_3_3;
               line_3.style.strokeDashoffset = (pathLength_3 + drawLength_3_3) / 1.5;

          });
          console.log('In viewport');
     } else {
          console.log('Not in the viewport... whomp whomp');
     }
});