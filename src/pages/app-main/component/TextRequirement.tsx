import React from 'react';

export default function TextRequirement() {

  return (
      <div>
        <h1>텍스트</h1>

        <h2>공통</h2>
        <ul>
          <li>똑같은 요구조건을 구현할 다른방법이 있는지 모름. 이걸 구현하는 여러가지 방법들 중 제일 좋은 방법을 찾아야함.</li>
          <li>
            그리고 그 요구조건을 구현하기 위해 고생한걸 녹여내면 됨.
            예를들어 numberOfLines prop을 모든 브라우저에서 구현하기 위해 노력했던 과정.
            반응형을 위한 ratio-box + image cripping 이런거는 각 페이지 에서 심오하게 조지는거지.
            이미지 자르기 관련 모든 방법을 나열하고 그중 장단점을 비교분석해서 제일 나은 모범답안을 내놓는거지.
          </li>
        </ul>

        <h2>요구조건</h2>
        <ul>
          <li>모든 페이지의 거의 모든 글꼴은 통일되야한다는 이야기. (구현은 상속관련 얘기 넣고 body 태그에서 보통 넣는다는 이야기. -- 왜 바디태그에 넣게되었지?)</li>
        </ul>

        <h2>개선 - 편하게 스타일링할 수 있도록 래핑 (조건 : 반응형, 크로스 브라우징)</h2>
        <ul>
          <li>글자 자릿수를 편하게 제한할 수 있는 numberOfLines prop (현재 구현된건 크롬에서만 잘됨)</li>
        </ul>

        <h2>마크업 관련 설명</h2>
        <ul>
          <li>styled-reset하면 텍스트 기준으로 baseline 뭐 이런거 생기면서 글자간이 좀 바뀌던데, 이런거때문에 텍스트 하나만 조져도 조질거 진짜많아짐.</li>
          <li>어디는 line-height 1.2em 어디는 line-height 1.2... line-height도 해야하고 em같은 단위도 해야함.</li>
        </ul>
      </div>
  );
}