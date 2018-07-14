import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-skill',
  templateUrl: './all-skill.component.html',
  styleUrls: ['./all-skill.component.scss']
})
export class AllSkillComponent implements OnInit {
  skill: Object = [
    {'class': 'html5', 'name': 'HTML5', 'percent': '99' },
    {'class': 'css3', 'name': 'CSS3', 'percent': '99' },
    {'class': 'js', 'name': 'Javascript', 'percent': '99' },
    {'class': 'angular', 'name': 'Angular 2+', 'percent': '95' },
    {'class': 'react', 'name': 'React', 'percent': '65' },
    {'class': 'vuejs', 'name': 'VueJs', 'percent': '70' },
    {'class': 'node', 'name': 'Node', 'percent': '95' },
    {'class': 'sass', 'name': 'Sass', 'percent': '99' },
    {'class': 'less', 'name': 'Less', 'percent': '99' },
    {'class': 'accusoft', 'name': 'Photoshop', 'percent': '70' },
    {'class': 'accessible-icon', 'name': 'Accessibility', 'percent': '80' },
    {'class': 'searchengin', 'name': 'SEO', 'percent': '85' },
    {'class': 'grunt', 'name': 'Grunt', 'percent': '85' },
    {'class': 'gulp', 'name': 'Gulp', 'percent': '80' },
    {'class': 'git-square', 'name': 'Git', 'percent': '90' },
    {'class': 'gitlab', 'name': 'Gitlab', 'percent': '99' },
    {'class': 'jenkins', 'name': 'Jenkins', 'percent': '50' },
    {'class': 'java', 'name': 'Java', 'percent': '60' },
    {'class': 'php', 'name': 'PHP', 'percent': '55' },
    {'class': 'linux', 'name': 'Linux', 'percent': '70' },
  ];

  constructor() { }

  ngOnInit() {
  }


}
