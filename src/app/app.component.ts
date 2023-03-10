import { ChangeDetectorRef } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { filter } from 'rxjs';
import {Observable} from 'rxjs';
import {startWith, map, tap} from 'rxjs/operators';

export const _filter = (opt: any[], value: any): string[] => {
  if(value['nombre']){
    const filterValue = value['nombre'].toLowerCase();
    return opt.filter(item => item['nombre'].toLowerCase().includes(filterValue));
  }

  const filterValue = value.toLowerCase();
  return opt.filter(item => item['nombre'].toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-project';

  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: any[] = [
    {
      letter: 'Clientes',
      names: [
        {
          id:1,
          nombre: "Cliente1"
        },
        {
          id:2,
          nombre: "Cliente2"
        },
        {
          id:3,
          nombre: "Cliente3"
        },
      ]
    },
    {
      letter: 'Proyectos',
      names: [
        {
          id:1,
          nombre: "Proyecto1"
        },
        {
          id:2,
          nombre: "Proyecto2"
        },
        {
          id:3,
          nombre: "Proyecto3"
        },
      ]
    },
  ];

  stateGroupOptions!: Observable<any[]>;

  constructor(private _formBuilder: FormBuilder, private cd:ChangeDetectorRef) {}

  prueba(){
    console.log(this.stateForm.value);
  }

  prueba2(name:any){
    // this.stateForm.get('stateGroup').setValue(name['nombre'])
    this.cd.detectChanges()
  }


  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  private _filterGroup(value: string): any[] {
    if (value) {      
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
