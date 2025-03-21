import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-portfolio',
  standalone: true, // ✅ Make this a standalone component
  imports: [CommonModule, MatDividerModule, MatChipsModule,MatCardModule], // ✅ Import CommonModule for Angular directives
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  // Personal Details
  name: string = 'Sabbisetty Sai Baba';
  role: string = 'Student';
  location: string = 'Ponduru, Srikakulam';
  phone: string = '+91 9692777797';
  email: string = 'ssbaba9692777797@gmail.com';

  // Summary
  summary: string = 'Motivated B-Tech CSE student with knowledge of Python and C, passionate about learning and applying programming to real-world challenges.';

  // Skills
  skills: string[] = ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript'];

  // Experience
  experience = {
    position: 'Summer Intern',
    company: 'Krify Software Solutions',
    duration: 'June 2024 - July 2024'
  };

  // Education
  education = [
    { degree: 'B.Tech - CSE', institution: 'GMR Institute of Technology', year: '2022 - 2026', cgpa: '8.77' },
    { degree: 'Intermediate - MPC', institution: 'Sri Chaitanya Junior College', year: '2020 - 2022', percentage: '94.1%' },
    { degree: '10th', institution: 'Sri Chaitanya School, Rajam', year: '2020' }
  ];

  // Achievements
  achievements: string[] = ['Participated in SIH-2024'];

  // Languages
  languages: string[] = ['English', 'Hindi', 'Telugu'];
}
