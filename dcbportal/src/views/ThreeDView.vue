<template>
    <div class="controller">
        <label>
            <p>rotateX</p>
            <input type="range" v-model="rx" min="-1080" max="1080" />
            <input type="text" v-model="rx" />
        </label>
        <label>
            <p>rotateY</p>
            <input type="range" v-model="ry" min="-1080" max="1080" />
            <input type="text" v-model="ry" />
        </label>
        <label>
            <p>rotateZ</p>
            <input type="range" v-model="rz" min="-1080" max="1080" />
            <input type="text" v-model="rz" />
        </label>
        <label>
            <p>depth</p>
            <input type="range" v-model="depth" max="1000" />
            <input type="text" v-model="depth" />
            <p>height : {{ height }}</p>
        </label>
        <label>
            <p>scale</p>
            <input type="range" v-model="scale3d" max="1" step="0.01" />
            <input type="text" v-model="scale3d" />
            <p>scale3d : {{ scale3d }}</p>
            <input type="checkbox" v-model="visible" />
            visible{{ visible }}
        </label>
        <button type="button" @click.prevent="run">RUN</button>
    </div>

    <div class="container">
        <div class="real_box"></div>

        <!-- realCode -->
        <div class="slot_container" :style="parentStyle">
            <div class="frame">
                <img :src="require(`@/assets/m_frame.png`)" alt="" />
            </div>
            <div class="perspective_container" :style="crop">
                <!-- <div class="scale_box" :style="style"> -->
                <div class="wrap" :style="style">
                    <div class="side" v-for="(list, index) in data" :key="index" :style="{ backgroundColor: list.color }">
                        <span class="front" :style="depths('forward')">
                            <img :src="require(`@/assets/${list.images}`)" alt="" />
                        </span>
                        <span class="back" :style="depths('reverse')">
                            <img :src="require(`@/assets/${list.images}`)" alt="" />
                        </span>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </div>
        <!-- //realCode -->
    </div>
</template>
<!-- 
    팔각 형
     - 선 끝과 끝과 연결
        - 슬롯 높이 : z 깊이 = 5 : 6
     - 스케일 0.8에서 수동적으로 단 스케일은 3d로


     3d
    parent 
        perspective 원근 투영
    3d 사용은 transform oring 3d

 -->
<script setup lang="ts">
import { computed, ref, onMounted } from "vue"
import anime from "animejs/lib/anime.es.js"

const data = [
    {
        color: "red",
        images: "m_1.png"
    },
    {
        color: "orange",
        images: "m_2.png"
    },
    {
        color: "yellow",
        images: "m_3.png"
    },
    {
        color: "green",
        images: "m_4.png"
    }
]

let rx = ref(0)
let ry = ref(0)
let rz = ref(0)
let depth = ref(271)
let scale3d = ref(0.55)
let visible = ref(true)

let height = computed(() => {
    let value = depth.value / 1.2
    return value
})

let style = computed(() => {
    let value = `transform:
        rotateX(${rx.value}deg)
        rotateY(${ry.value}deg)
        rotateZ(${rz.value}deg)
        scale3d(${scale3d.value},${scale3d.value},${scale3d.value})
     `
    return value
})

let parentStyle = computed(() => {
    let value = `height: ${height}`
    return value
})

let crop = computed(() => {
    let value = visible.value ? "hidden" : "visible"
    return `overflow : ${value}`
})

let depths = (direction: string) => {
    let value = `transform:translateZ(${depth.value}px)`
    if (direction == "reverse") {
        value = `transform:translateZ(${depth.value * -1}px) rotateX(180deg)`
    }
    return value
}

onMounted(() => {})

let run = () => {
    const element = document.querySelector(".wrap")

    anime({
        targets: element,
        rotateX: -1800,
        duration: 6000,
        easing: "easeOutCirc",
        complete: function (anim: any) {
            alert(anim.completed)
        }
    })
}
</script>
<style lang="scss" scope>
.controller {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 10;
    color: white;
    label {
        margin: 0 8px;
    }
    input {
        display: block;
        width: 200px;
    }
}
$height: 225px;

html,
body {
    background-color: purple;
}

.real_box {
    position: absolute;
    width: 411px;
    height: $height;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 500px;
        background-color: red;
        left: 0;
    }
    &::after {
        left: auto;
        right: 0;
    }
}
.container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 1000px;
    border: 1px solid #000;
    background-color: purple;
}

.slot_container {
    position: absolute;
    width: 557px;
    height: 260px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .frame {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 500;
    }
}
.perspective_container {
    position: absolute;
    perspective: 300px;
    left: 50%;
    top: 50%;
    width: 520px;
    height: 225px;
    transform: translate(-50%, -53%);
    .wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        transform-style: preserve-3d; //
        transform-origin: center; //
        $depth: $height * 1.2;
        will-change: transform;
        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d; //
            //for ans
            &:nth-child(2) {
                transform: rotateX(45deg);
            }
            &:nth-child(3) {
                transform: rotateX(90deg);
            }
            &:nth-child(4) {
                transform: rotateX(135deg);
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
                background: ivory;
                transform: rotate(180deg);
                backface-visibility: hidden;
                // background: white;
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    // box-shadow: -2px 1px 15px -5px rgba(0, 0, 0, 0.68) inset;
                }
            }
            .front {
                // background-color: black;
                transform: translateZ($depth);
                // opacity: 0.5;
            }
            .back {
                // background-color: skyblue;
                transform: translateZ($depth * -1);
            }
        }
    }
}
</style>
