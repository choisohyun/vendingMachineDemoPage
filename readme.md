 # Branch

**master** : 마지막에 dev와 vm-ui 를 merge하는 브랜치

**dev** : PR 보내는 브랜치

**feature/ui** : HTML, CSS 작성 + 상품 데이터 렌더링

**feature/product-list-view** : 상품 화면 작동 기능

**feature/product-select-view** : 상품 선택 화면 작동 기능

**feature/wallet-view** : 지갑 화면 작동 기능

**feature/contoller** : model과 view 연결자 역할

**feature/product-model** : 상품 데이터 변경(Observer 상속받아)

**feature/amount-model** : 금액 데이터 변경(Observer 상속받아)

**feature/observable** : 구독, 발행을 위한 Observer

# 코드 컨벤션

- 클래스 위주로 작성하기
- 작은 단위의 기능은 함수로 작성하기

# 자판기 UI 설계도

![img](https://i.imgur.com/N7ms6Qc.jpg)


# 자판기 Observer + MVC 패턴 설계도

- 추후 변경 가능성 있음.
- Model 부분 메소드 미정 상태.

![20200310_174625](https://user-images.githubusercontent.com/30427711/76295491-0f84e300-62f8-11ea-988a-43a56c9df2ac.png)
