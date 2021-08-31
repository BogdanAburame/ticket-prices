import { query } from '@angular/animations'
import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.scss']
})

export class CalcComponent implements OnInit {
    kilometers = 0
    age = 0
    weight = 0

    aeroflotEconomy = 0
    aeroflotAdvanced = 0
    aeroflotLuxury = 0

    rusrailEconomy = 0
    rusrailAdvanced = 0
    rusrailLuxury = 0

    inputKm(event: any) {
        const kilo: number = event.target.value
        this.kilometers = kilo;
    }
    inputAge(event: any) {
        const a: number = event.target.value
        this.age = a;
    }
    inputWeight(event: any) {
        const w: number = event.target.value
        this.weight = w;
    }

    calculated() {

        this.aeroflotEconomy = this.kilometers * 4 
        if (this.weight < 20 && this.weight > 5) {
            this.aeroflotEconomy += 4000 
        }

        this.aeroflotAdvanced = this.kilometers * 8
        if (this.age <= 7 && this.age != 0) {
            this.aeroflotAdvanced *= 0.7
        }
        if (this.weight > 20 && this.weight != 0) {
            this.aeroflotAdvanced += 5000 
        }

        this.aeroflotLuxury = this.kilometers * 15
        if (this.age <= 16 && this.age != 0) {
            this.aeroflotLuxury *= 0.7
        }

        this.rusrailEconomy = this.kilometers * 0.5
        if (this.age <= 5 && this.age != 0) {
            this.rusrailEconomy *= 0.5
        }
        if (this.weight > 15 && this.weight != 0) {
            this.rusrailEconomy += (this.weight - 15) *  50
        }

        this.rusrailAdvanced = this.kilometers * 2
        if (this.age <= 8 && this.age != 0) {
            this.rusrailAdvanced *= 0.7
        }
        if (this.weight > 20 && this.weight != 0) {
            this.rusrailAdvanced += (this.weight - 20) *  50
        }

        this.rusrailLuxury = this.kilometers * 4
        if (this.age <= 16 && this.age != 0) {
            this.rusrailLuxury *= 0.8
        }
        

   }

    ngOnInit() {

    }
}

