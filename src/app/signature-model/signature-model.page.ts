import { UtilService } from './../util.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-signature-model',
  templateUrl: './signature-model.page.html',
  styleUrls: ['./signature-model.page.scss'],
})
export class SignatureModelPage implements OnInit {
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  private ctx: CanvasRenderingContext2D | null = null;
  public eventString;any;
  private drawing = false;
  private lastX = 0;
  private lastY = 0;
  canvasElement: any;
  selectedColor = "#000000";
  lineWidth = 5;

  constructor(private modalCtrl: ModalController,public utilservice:UtilService,private navParams:NavParams) { }

  ngOnInit() {
    this.eventString = this.navParams.get('event');
    console.log(this.eventString)
  }

  ngAfterViewInit() {
    // Canvas setup moved to setupCanvas method
  }

  ionViewDidEnter() {
    setTimeout(() => this.setupCanvas(), 100);
    window.addEventListener('resize', this.setupCanvasBound);
  }

  ionViewWillLeave() {
    window.removeEventListener('resize', this.setupCanvasBound);
  }

  setupCanvasBound = () => this.setupCanvas();

  setupCanvas() {
    const canvas = this.canvas.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    this.canvasElement = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(dpr, dpr);

    this.ctx.strokeStyle = '#000';
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.globalAlpha = 1;
    this.ctx.globalCompositeOperation = 'source-over';
  }

  startDrawing(ev: any) {
    const { x, y } = this.getXY(ev);
    this.drawing = true;
    this.lastX = x;
    this.lastY = y;
  }

  moved(ev: any) {
    if (!this.drawing) return;
    if (ev.preventDefault) {
      ev.preventDefault();
    }

    const { x, y } = this.getXY(ev);

    requestAnimationFrame(() => {
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.lastX = x;
      this.lastY = y;
    });
  }

  endDrawing() {
    this.drawing = false;
  }

  private getXY(ev: any) {
    const canvas = this.canvas.nativeElement;
    const rect = canvas.getBoundingClientRect();

    const touch = (ev.touches && ev.touches[0]) || (ev.changedTouches && ev.changedTouches[0]);
    const pageX = touch ? touch.pageX : ev.pageX;
    const pageY = touch ? touch.pageY : ev.pageY;

    return { x: pageX - rect.left, y: pageY - rect.top };
  }

  clearCanvas = () => {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  };

  public submitSignature (){
      this.utilservice.signatureData = ''
      // Store the complete data URI for proper display
      this.utilservice.signatureData = this.canvasElement.toDataURL();
      this.clearCanvas();
      this.modalCtrl.dismiss({
        checkClose:''
      });
  }
  public dismissModal(checkClose) {
    this.modalCtrl.dismiss({
      checkClose:checkClose
    });
  }
}
