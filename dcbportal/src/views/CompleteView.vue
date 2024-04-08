<template>
    <div class="special_event">
        <div class="align_box">
            <div class="slot_container">
                <div class="slot_frame">
                    <img :src="require('@/assets/m_frame.png')" alt="" />
                </div>
                <div class="slot_badge">
                    <img src="https://static-upload.mustit.co.kr/selling_event/230724_mustival/mo/badge_txt.png" alt="" />
                    <span class="before"></span>
                </div>
                <!-- slot start -->
                <div class="perspective_container">
                    <div class="slot_wrap" ref="slotWrap">
                        <div class="side" v-for="index of 4" :key="index">
                            <span class="front">
                                <img :src="require(`@/assets/m_${index}.png`)" alt="" />
                            </span>
                            <span class="back">
                                <img :src="require(`@/assets/m_${index}.png`)" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                <!-- //slot start -->
            </div>
        </div>
        <!-- //slot -->
        <button type="button" @click.stop="run()" class="btn_saving">
            <img src="https://static-upload.mustit.co.kr/selling_event/230724_mustival/pc/btn_saving.png" alt="" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue"
import anime from "animejs/lib/anime.es.js"

let initRunState = ref(false)

const getSlot = () => {
    return document.querySelector(".slot_container")
}

const setDeg = (ran: number) => -1440 - ran * 45

const initRun = () => {
    if (!initRunState.value) {
        const slotWrap = document.querySelector(".slot_wrap") as HTMLDivElement | null
        console.log(20)
        if (slotWrap !== null) {
            slotWrap.style.transform = "scale3d(0.55,0.55,0.55)"
            console.log(88888)
            anime({
                targets: ".slot_wrap",
                rotateX: -540,
                duration: 2500,
                easing: "easeOutBack",
                complete: function () {
                    slotWrap.style.transform = "scale3d(0.55,0.55,0.55) rotateX(0)"
                    initRunState.value = true
                }
            })
        }
    }
}

const randomize = ($min: number, $max: number) => {
    return Math.floor(Math.random() * ($max - $min + 1)) + $min
}

const run = () => {
    const slotWrap = document.querySelector(".slot_wrap") as HTMLDivElement | null
    if (slotWrap !== null) {
        anime({
            targets: ".slot_wrap",
            rotateX: setDeg(randomize(0, 4)),
            duration: 5500,
            easing: "easeOutCirc",
            complete: function () {}
        })
    }
}

onMounted(() => {
    initRun()
})
</script>

<style lang="scss" scope>
$s3-upload: "https://static-upload.mustit.co.kr/";
$imgPath: $s3-upload + "selling_event/230724_mustival/pc/";
@function get-update($value: 1) {
    @return if($value > 1, "?v=#{$value}", "");
}
$updateText: get-update(7);
$primary: #f52644 !default;
$white: #fff !default;
$black: #000 !default;
$gray2: #222 !default;
$gray3: #333 !default;
$gray5: #555 !default;
$gray6: #666 !default;
$gray8: #888 !default;
$gray9: #999 !default;
$graya: #aaa !default;
$grayc: #ccc !default;
$grayd: #ddd !default;
$graye: #eee !default;
$color-a0: #a0a0a0 !default;
$color-14: #141414 !default;
$color-f0: #f0f0f0 !default;
$color-fa: #fafafa !default;
$color-f5: #f5f5f5 !default;
$color-f7: #f7f7f7 !default;
$color-f9: #f9f9f9 !default;
$color-d8: #d8d8d8 !default;
$color-e1: #e1e1e1 !default;
$color-e3: #e3e3e3 !default;
$color-e6: #e6e6e6 !default;
$color-eb: #ebebeb !default;
$color-f7: #f7f7f7 !default;
$color-05f: #0055ff !default;
$color-008ff3: #008ff3 !default;
$color-48a2b6: #48a2b6 !default;
$color-d01f3c: #d01f3c !default;
$color-fcbdc7: #fcbdc7 !default;
$color-f5a: #f5a523;
$color-f5a523: #f5a523 !default;
@mixin php-reset() {
    box-sizing: border-box;
    * {
        font-family: Pretendard;
        box-sizing: border-box;
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    button {
        background: transparent;
        border: 0;
        -webkit-tap-highlight-color: rgba($black, 0.05);
    }
}
@mixin img-no-drag {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
//text hide
@mixin blind {
    position: absolute;
    top: -9999px;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    opacity: 0;
    clip-path: polygon(0 0, 0 0, 0 0);
}
.special_event {
    // use data
    $depth: 269px;
    $scale: 0.55;
    $perspective: 300px;
    @include php-reset;
    img {
        @include img-no-drag;
    }
    .offscreen {
        @include blind;
    }
    .inner_wrap {
        position: relative;
        width: 1080px;
        margin: 0 auto;
    }
    @mixin bg($name) {
        background-image: url($imgPath + $name + $updateText);
        background-repeat: no-repeat;
        @content;
    }

    @keyframes infinityRotate {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    //E use data

    padding: 80px 0 94px;
    text-align: center;
    @include bg("special_bg.png") {
        background-position: center top;
        background-size: 1920px auto;
        background-color: #2a0000;
    }

    .special_1 {
        margin-bottom: 44px;
    }
    .special_2 {
        margin-top: 140px;
    }
    .btn_saving {
        margin-top: 21px;
    }
    // slot start
    .align_box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 196px;
    }

    .slot_container {
        position: relative;
        width: 557px;
        height: 260px;
        transform: scale(0.74);
        .slot_frame {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            z-index: 2;
        }
        .slot_badge {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 184px;
            height: 184px;
            right: -64px;
            top: -75px;
            z-index: 3;
            > img {
                position: relative;
                z-index: 3;
            }
            .before {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                transform-origin: center;
                @include bg("badge.png") {
                    background-size: cover;
                }
                animation: infinityRotate 10s linear infinite forwards;
            }
        }
    }

    .perspective_container {
        position: absolute;
        perspective: $perspective;
        left: 50%;
        top: 50%;
        width: 520px;
        height: 225px;
        transform: translate(-50%, -50%);
        background: $white;
        overflow: hidden;
        .slot_wrap {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transform-style: preserve-3d; //
            transform-origin: center; //
            transform: scale3d($scale, $scale, $scale);
            will-change: transform;
            .side {
                position: absolute;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d; //
                @for $i from 2 through 4 {
                    &:nth-child(#{$i}) {
                        transform: rotateX((45 * ($i - 1)) * 1deg);
                    }
                }
                .front,
                .back {
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    transform-origin: center;
                    backface-visibility: hidden;
                }
                .front {
                    transform: translateZ($depth);
                }
                .back {
                    transform: translateZ($depth * -1) rotateX(180deg);
                }
            }
        }
    }

    //E slot end
    .share_btn_container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 39px 0 52px;
        button {
            width: 62px;
            height: 62px;
            margin-right: 15px;
            &:last-of-type {
                margin-right: 0;
            }
            img {
                width: 62px;
            }
        }
    }
    .btn_notice {
        transform: translateX(25px);
    }
}
</style>
