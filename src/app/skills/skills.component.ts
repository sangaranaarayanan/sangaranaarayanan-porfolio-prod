import { Component, OnInit } from '@angular/core';
import { faInstagram,faFacebook,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTools,faBook} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  skill=faTools;
  story=faBook;
}
