import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './index.css';

import { IonicVue } from '@ionic/vue';

import './registerServiceWorker';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* ionic component 전역설정 */
import * as Ion from '@ionic/vue';

import FormRow from './components/FormRow.vue';
import MainHeader from './components/MainHeader.vue';


import { createGlobalState, globalStateSymbol } from "@/stores"
import { createMainApi, mainApiSymbol } from "@/apis"

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .provide(globalStateSymbol, createGlobalState())
  .provide(mainApiSymbol, createMainApi())
  
  .component('ion-page', Ion.IonPage)
  .component('ion-toolbar', Ion.IonToolbar)
  .component('ion-buttons', Ion.IonButtons)
  .component('ion-button', Ion.IonButton)
  .component('ion-back-button', Ion.IonBackButton)
  .component('ion-title', Ion.IonTitle)
  .component('ion-header', Ion.IonHeader)
  .component('ion-content', Ion.IonContent)
  .component('ion-tabs', Ion.IonTabs)
  .component('ion-tab-bar', Ion.IonTabBar)
  .component('ion-tab-button', Ion.IonTabButton)
  .component('ion-label', Ion.IonLabel)
  .component('ion-icon', Ion.IonIcon)
  .component('ion-infinite-scroll', Ion.IonInfiniteScroll)
  .component('ion-infinite-scroll-content', Ion.IonInfiniteScrollContent)
  .component('ion-list', Ion.IonList)
  .component('ion-card', Ion.IonCard)
  .component('ion-card-content', Ion.IonCardContent)
  .component('ion-card-subtitle', Ion.IonCardSubtitle)
  .component('ion-card-title', Ion.IonCardTitle)
  .component('ion-card-header', Ion.IonCardHeader)
  .component('ion-segment', Ion.IonSegment)
  .component('ion-segment-button', Ion.IonSegmentButton)
  .component('ion-input', Ion.IonInput)
  .component('FormRow', FormRow)
  .component('MainHeader', MainHeader);

  
router.isReady().then(() => {
  app.mount('#app');
});