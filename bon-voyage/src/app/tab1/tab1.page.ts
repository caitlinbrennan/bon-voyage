import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowForward, personCircleOutline} from 'ionicons/icons';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonIcon, IonButton],
})
export class Tab1Page {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ arrowForward, personCircleOutline });
  }
}
/*export class HomePage implements OnInit{
  tableData: any[] = [];
  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
      await this.loadData();
  }
  async loadData() {
    const tableData = await this.supabaseService.getData('upcoming_trips');
      console.log('Data from Supabase:', this.tableData);
  }
}*/