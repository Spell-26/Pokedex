import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit, OnDestroy {

  private audio!: HTMLAudioElement;

  constructor() {
  }

  ngOnDestroy(): void {
    //Remover el listener cuando se destruye el componente
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this))
    }

  ngOnInit(): void {
    this.audio = new Audio('../../../../assets/audio/ost-hoen.mp3');
    this.audio.loop = true;
    this.audio.load();

    // Reproduce el audio automaticamente una vez se carga el componente
    this.audio.addEventListener('canplaythrough', () => {
      this.playAudio();
    });

    // Se añade listener para el cambio de visibilidad de la pagina
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this))
  }


  playAudio(): void {
    this.audio.play();
  }

  pauseAudio(): void {
    this.audio.pause();
  }

  handleVisibilityChange(): void {
    if (document.hidden) {
      this.pauseAudio();
    } else {
      this.playAudio();
    }
  }
}
