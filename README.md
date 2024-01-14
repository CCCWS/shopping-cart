## 사용 기술
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 배포 주소

https://cccws.github.io/shopping-cart


## 설치 및 실행
  ```
  git clone https://github.com/CCCWS/shopping-cart
  cd shopping-cart
  npm install
  npm run dev
  ```

## 폴더 구성

📦src   
 ┣ 📂customHooks  
 ┃ ┗ 📜useObserver.ts  
 ┣ 📂db  
 ┃ ┗ 📜db.json  
 ┣ 📂icon  
 ┃ ┣ 📜check_icon.png  
 ┃ ┣ 📜header_icon.png  
 ┃ ┗ 📜landing_icon.png  
 ┣ 📂page  
 ┃ ┣ 📂Order  
 ┃ ┃ ┣ 📜Footer.tsx  
 ┃ ┃ ┣ 📜Header.tsx  
 ┃ ┃ ┣ 📜ItemDiv.tsx  
 ┃ ┃ ┣ 📜ItemList.tsx  
 ┃ ┃ ┗ 📜Order.tsx  
 ┃ ┣ 📂Result  
 ┃ ┃ ┣ 📜Complete.tsx  
 ┃ ┃ ┣ 📜Error.tsx  
 ┃ ┃ ┗ 📜ResultBase.tsx  
 ┃ ┗ 📜Landing.tsx   
 ┣ 📂redux  
 ┃ ┣ 📂reducer  
 ┃ ┃ ┣ 📜cart.ts  
 ┃ ┃ ┣ 📜device.ts  
 ┃ ┃ ┣ 📜loading.ts  
 ┃ ┃ ┗ 📜saveItem.ts  
 ┃ ┣ 📜reduxStore.ts  
 ┃ ┗ 📜reduxType.ts  
 ┣ 📜App.tsx  
 ┣ 📜color.css  
 ┣ 📜GlobalStyle.tsx  
 ┣ 📜index.tsx  
 ┣ 📜PageStype.tsx  
 ┗ 📜react-app-env.d.ts  

 ## 실행 화면

 <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/cbcd219f-1332-4306-896d-647c6d4d4ee4"  width="300px">
 
|                   home            |                    order / 데이터 로딩                      |
| :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/136871ee-7abd-49a0-b599-9759b5225c28"  width="200px"> |<img src="https://github.com/CCCWS/shopping-cart/assets/86645532/c15a0ad2-6a56-4cd1-ac2b-95c9d90e79ef"  width="200px"> |  
|                    order / 데이터 로딩 완료                     |                  order/ 반응형(브라우저 크기 800px 이상)                     |
  | <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/3bd3b5f5-0cd5-43f6-b5b3-de722b9b50f9"  width="200px"> |    <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/f85cea14-94fd-4639-bd8c-c29f15e450be"  width="300px"> | 
 |                    order / 페이지 구성                     |                  order/ 상품 개수 증가                      |
  | <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/781ebd44-95e2-48cf-8b9f-97a8a29531be"  width="200px"> |    <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/2fc5759a-12c0-44d4-ad1d-dfc754b0e318"  width="200px"> | 
   |                    order / 주문 로딩                     |                  주문 성공 및 실패                      |
  | <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/3e937709-cc55-43f5-8ef2-82da84d13c8a"  width="200px"> |    <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/d39c5b96-b9f9-4c03-8573-ccb1737ac4e9"  width="200px">   <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/34065f7e-d0f1-4e56-827f-5660a8301bfc"  width="200px">|



            
## 기능 구현

### 홈
- [x] 버튼 클릭 시 order 페이지 이동

### 주문  
- [x] header, footer 상하단 고정  
- [x] 페이지 접속 시 데이터 요청  
- [x] 데이터 요청 중 로딩 표시  
- [x] 상품 개수 조작 가능  
- [x] 0개 미만, 999 초과 조작 불가  
- [x] footer에 총 수량 및 가격 표시  
- [x] 총 수량이 0일 경우 주문 불가  
- [x] 수량이 1 이상일 경우 배경색 변경  
- [x] 주문 시 로딩 표시 및 footer 주문하기 버튼 변경  

* 가로 화면이 넓어지면 상품을 한줄에 2개씩 보이도록 개선    
* header의 로고 클릭 시 홈화면으로 이동  
* 로딩 연출을 위해 데이터 요청, 주문하기 클릭 시 setTimeout 함수를 사용해 의도적으로 지연시간 발생  
* item을 담고 있는 컴포넌트와 개별 item 컴포넌트를 분리시키고 React.memo 함수를 사용하여 상품 수량 변경 시 불필요한 리랜더링 방지  
* useObserver 커스텀훅을 사용해서 item 컴포넌트가 화면에 보이는지 감시하여 랜더링 시 애니메이션 추가  
  
### 성공  
- [x] 3초뒤 주문 페이지로 이동  
  
### 실패   
- [x] 3초뒤 주문 페이지로 이동  
  
* 에러 연출을 위해 1개 상품 주문 시 실패 페이지로 이동  


### 기타
* github page에 배포하여 로컬 환경에서 실행 했을 때는 로컬 서버로 데이터를 요청하고
  배포 환경에서는 "my-json-server.typicode.com"을 사용해 리포지토리에 업로드된 db로 데이터 요청
* concurrently를 사용해 클라이언트와 서버 동시 실행 명령어 추가


## 성능 개선
|                   memo 사용 전            |                    memo 사용 후                     |
| :---------------------------------------------: | :---------------------------------------------: |
| <img src="https://github.com/CCCWS/shopping-cart/assets/86645532/8d76f395-18ba-43c4-8d8a-1a52acdd1937"  width="200px"> |<img src="https://github.com/CCCWS/shopping-cart/assets/86645532/bad3a3d2-87f1-408c-8690-a9de7eae4d8c"  width="200px"> |

React.memo 함수를 사용하여 개수 변경이 없는 item은 리랜더링이 발생하지 않도록 개선



