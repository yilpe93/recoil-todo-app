# Recoil Todo App

- emotion
- recoil/recoil-icon

--- 

[Recoil 공식문서](https://recoiljs.org/ko/docs/introduction/installation)

```bash
$ npm i recoil

&&

$ yarn add recoil
```


## RecoilRoot

`atom()`의 컨텍스트를 제공하는 **Provider**이다.
Recoil의 hooks를 사용하기 위해 최상위 컴포넌트에 선언한다.

```tsx
// index.tsx
// ...

import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Atom

## Selector

---

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.