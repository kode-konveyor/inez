import { Component, Input } from '@angular/core'
import { appData } from 'src/app/app.component';
import { Hero } from 'src/types/Hero'

@Component({
  selector: 'heroeditor',
  templateUrl: './heroeditor.component.html',
  styleUrls: ['./heroeditor.component.css']
})
export class HeroeditorComponent {
  @Input() hero?: Hero;

  appData = appData;

}
