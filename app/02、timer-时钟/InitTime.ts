/**
 * create by yanlele
 * create time 2018-10-12 13:08
 */

import Store from './Store.js'

class InitTime {
    protected time: HTMLElement = document.getElementById('time');
    protected font: HTMLCanvasElement = document.createElement('canvas');
    protected fontCtx: CanvasRenderingContext2D = this.font.getContext('2d');
    protected back: HTMLCanvasElement = document.createElement('canvas');
    protected backCtx: CanvasRenderingContext2D = this.back.getContext('2d');
    protected ratio: number = window.devicePixelRatio || 1;                         // 设备像素比
    protected color: string = '#666';

    protected textWid: number;
    protected fontSize: number;
    protected numWidth: number;
    protected numHeight: number;
    protected lineWidth: number;

    protected halfTextWid: number;
    protected halfFontSize: number;
    protected halfNumHeight: number;
    protected halfNumWidth: number;
    protected y: number;

    protected ready: boolean = false;
    protected cache:any = {};
    protected ch: Array<string> = ['年', '月', '日', '时', '分', '秒'];
    protected timeMap: any = {
        0: '1110111', // |-|_ |_|
        1: '0010001',
        2: '0111110',
        3: '0111011',
        4: '1011001',
        5: '1101011',
        6: '1101111',
        7: '0110001',
        8: '1111111',
        9: '1111011',
    };

    protected keys: Array<string> = Object.keys(this.timeMap);

    constructor(textWid, fontSize, numWidth, numHeight, lineWidth) {
        this.time.appendChild(this.back);
        this.time.appendChild(this.font);

        // **element.offsetWidth**|	返回元素的宽度，包括边框和填充，但不是边距
        this.font.width = this.back.width = this.time.offsetWidth * this.ratio;
        this.font.height = this.back.height = this.time.offsetHeight * this.ratio;
        this.fontCtx.strokeStyle = this.color;

        // 线条末端 round
        this.fontCtx.lineCap = 'round';
        // 线条连接处 round
        this.fontCtx.lineJoin = 'round';

        this.textWid *= textWid;
        this.fontSize *= fontSize;
        this.numWidth *= numWidth;
        this.numHeight *= numHeight;
        this.lineWidth *= lineWidth;

        this.halfTextWid = textWid / 2;
        this.halfFontSize = fontSize / 2;
        this.halfNumWidth = numWidth / 2;
        this.halfNumHeight = numHeight / 2;
        this.y = this.back.height/2;

        this.backCtx.textAlign = 'center';
        this.backCtx.textBaseline = 'middle';
        this.backCtx.font = this.fontSize + 'px sans-serif, "黑体"';
    }
}

export default InitTime;