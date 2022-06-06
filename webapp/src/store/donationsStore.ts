import axios from 'axios';
import { makeObservable, observable } from 'mobx';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

type DonationsStorePrivateFields = 'donationsTotal'

class DonationsStore {
  private donationsTotal: number;

  constructor() {
    this.donationsTotal = 0;

    axios.get('http://localhost:8000/donations')
      .then((response) => this.donationsTotal = response.data.totalDonations)
      .catch((error) => {
        console.log('Error fetching total donations:', error);
      });

    const ws = new W3CWebSocket('ws://localhost:9000');

    ws.onmessage = (message) => {
      const amount = JSON.parse(message.data as string);
      this.donationsTotal = amount
    };

    makeObservable<DonationsStore, DonationsStorePrivateFields>(this, {
      donationsTotal: observable
    });
  }

  public get donationsTotalAmount(): number {
    return this.donationsTotal;
  }
}

export default new DonationsStore();