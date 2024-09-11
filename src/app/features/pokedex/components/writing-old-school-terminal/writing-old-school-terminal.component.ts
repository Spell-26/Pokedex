import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-writing-old-school-terminal',
  templateUrl: './writing-old-school-terminal.component.html',
  styleUrls: ['./writing-old-school-terminal.component.css']
})
export class WritingOldSchoolTerminalComponent implements OnInit {
  @ViewChild('terminalText', { static: true }) terminalText!: ElementRef<HTMLParagraphElement>;

  //referencias pokemon
  private references: string[] = [
    "Bulbasaur - El Pokémon Semilla que evoluciona a Ivysaur.",
    "Pikachu - El Pokémon Ratón Eléctrico querido por muchos entrenadores.",
    "Charizard - El Pokémon Llama conocido por su aliento llameante.",
    "Eevee - El Pokémon Evolución capaz de evolucionar en muchas formas diferentes.",
    "Mewtwo - El Pokémon Genético creado mediante experimentación científica.",
    "Snorlax - El Pokémon Dormilón que ama comer y dormir.",
    "Jigglypuff - El Pokémon Globo conocido por su canción calmante.",
    "Mew - El Pokémon Nuevo Especie, raro y elusivo.",
    "Gyarados - El Pokémon Atrocidad que evoluciona de Magikarp.",
    "Squirtle - El Pokémon Tortuguita con habilidades basadas en agua.",
    "Pidgeot - El Pokémon Ave conocido por su velocidad y agilidad.",
    "Zapdos - El Pokémon Legendario Ave Eléctrica.",
    "Dragonite - El Pokémon Dragón conocido por su habilidad para volar.",
    "Blastoise - El Pokémon Tortuga y forma final de Squirtle.",
    "Arcanine - El Pokémon Legendario conocido por su lealtad.",
    "Alakazam - El Pokémon Psi con increíbles habilidades psíquicas.",
    "Gengar - El Pokémon Sombra que se esconde en la oscuridad.",
    "Articuno - El Pokémon Legendario Ave de Hielo.",
    "Golem - El Pokémon Megatón conocido por su cuerpo extremadamente duro.",
    "Vaporeon - El Pokémon Chorro Burbuja, una de las evoluciones de Eevee.",
    "Scyther - El Pokémon Mantis con garras afiladas como cuchillas.",
    "Machamp - El Pokémon Superpoder conocido por su fuerza.",
    "Aerodactyl - El Pokémon Fósil revivido de tiempos antiguos.",
    "Starmie - El Pokémon Misterioso con habilidades psíquicas y acuáticas.",
    "Moltres - El Pokémon Legendario Ave de Fuego.",
    "Raichu - El Pokémon Rata y forma evolucionada de Pikachu.",
    "Gardevoir - El Pokémon Abrazo conocido por sus poderes psíquicos.",
    "Sceptile - El Pokémon Bosque y evolución final de Treecko.",
    "Swampert - El Pokémon Pez Barro y evolución final de Mudkip.",
    "Las Poké Balls se utilizan para atrapar Pokémon en estado salvaje.",
    "El Profesor Oak es un investigador Pokémon de Pueblo Paleta.",
    "La Liga Pokémon está formada por los Cuatro Fantásticos y el Campeón.",
    "¡Atrápalos ya! Es el lema del entrenador Pokémon.",
    "Mewtwo - El Pokémon Genético creado mediante experimentación científica.",
    "Gyarados - El Pokémon Atrocidad que evoluciona de Magikarp.",
    "Gengar - El Pokémon Sombra que se esconde en la oscuridad.",
    "Articuno - El Pokémon Legendario Ave de Hielo.",
    "Vaporeon - El Pokémon Chorro Burbuja, una de las evoluciones de Eevee.",
    "Scyther - El Pokémon Mantis con garras afiladas como cuchillas.",
    "Machamp - El Pokémon Superpoder conocido por su fuerza.",
    "Aerodactyl - El Pokémon Fósil revivido de tiempos antiguos.",
    "Starmie - El Pokémon Misterioso con habilidades psíquicas y acuáticas.",
    "Moltres - El Pokémon Legendario Ave de Fuego.",
    "Raichu - El Pokémon Rata y forma evolucionada de Pikachu.",
    "Gardevoir - El Pokémon Abrazo conocido por sus poderes psíquicos.",
    "Sceptile - El Pokémon Bosque y evolución final de Treecko.",
    "Swampert - El Pokémon Pez Barro y evolución final de Mudkip.",
    "Garchomp - El Pokémon Mach con poderosas mandíbulas.",
    "Lucario - El Pokémon Aura capaz de detectar emociones.",
    "Los entrenadores Pokémon suelen desafiar a otros a batallas para entrenar a sus Pokémon.",
    "Ash Ketchum es un conocido entrenador que viaja por diferentes regiones en busca de nuevos Pokémon.",
    "El entrenador Red es famoso por ser el campeón de la Liga Pokémon en la región de Kanto.",
    "Misty es una entrenadora especializada en Pokémon de tipo Agua y es líder de gimnasio en Ciudad Celeste.",
    "Brock es un entrenador experto en Pokémon de tipo Roca y Tierra, y es líder de gimnasio en Ciudad Plateada.",
    "Los entrenadores suelen tener un vínculo especial con sus Pokémon, cuidándolos y entrenándolos para mejorar sus habilidades.",
    "Gary Oak es el nieto del Profesor Oak y rival de Ash en su viaje como entrenador Pokémon.",
    "Los entrenadores suelen coleccionar medallas al derrotar a líderes de gimnasio y participar en la Liga Pokémon.",
    "Los líderes de gimnasio son entrenadores experimentados que desafían a los aspirantes a obtener medallas.",
    "Los entrenadores utilizan Poké Balls para capturar y almacenar Pokémon en dispositivos portátiles llamados Pokédex.",
    "Brock - Líder de gimnasio de Ciudad Plateada, especializado en Pokémon de tipo Roca y Tierra.",
    "Misty - Líder de gimnasio de Ciudad Celeste, especializada en Pokémon de tipo Agua.",
    "Lt. Surge - Líder de gimnasio de Ciudad Carmín, especializado en Pokémon de tipo Eléctrico.",
    "Erika - Líder de gimnasio de Ciudad Azulona, especializada en Pokémon de tipo Planta.",
    "Koga - Líder de gimnasio de Ciudad Fucsia, especializado en Pokémon de tipo Veneno.",
    "Sabrina - Líder de gimnasio de Ciudad Azafrán, especializada en Pokémon de tipo Psíquico.",
    "Blaine - Líder de gimnasio de Isla Canela, especializado en Pokémon de tipo Fuego.",
    "Giovanni - Líder de gimnasio de Ciudad Verde, especializado en Pokémon de tipo Tierra.",
    "Clair - Líder de gimnasio de Ciudad Endrino, especializada en Pokémon de tipo Dragón.",
    "Pryce - Líder de gimnasio de Ciudad Malva, especializado en Pokémon de tipo Hielo.",
  ];

  private currentIndex: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.startTypingLoop();
  }

  private startTypingLoop(): void {
    setInterval(() => {
      this.currentIndex = this.getRandomIndex();
      this.typeText();
    }, 15000); // 15000 milliseconds = 15 seconds
  }
  private typeText(): void {
    if (this.currentIndex === -1) return; // Initial state

    const currentText = this.references[this.currentIndex];
    this.animateText(currentText);
  }

  private animateText(text: string): void {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        this.terminalText.nativeElement.textContent += text[index];
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          this.clearText();
        }, 2000); // Optional delay before clearing text
      }
    }, 100); // Adjust typing speed here
  }

  private clearText(): void {
    this.terminalText.nativeElement.textContent = '';
  }

  private getRandomIndex(): number {
    return Math.floor(Math.random() * this.references.length);
  }
}
