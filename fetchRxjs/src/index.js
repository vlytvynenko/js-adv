import {from} from 'rxjs'
import {switchMap, filter, map, catchError} from 'rxjs/operators'

let path = 'https://jsonplaceholder.typicode.com/todos'

function obsFetch(url){
   const stream$ = from(fetch(url))
    .pipe(
      switchMap(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.status
        }
      })
    )
    stream$.subscribe( data => {
      for( let result of data) {
        console.log(result)
      }
    })
}

const btn = document.getElementById('button')

btn.addEventListener('click', () => {
  obsFetch(path)
})
