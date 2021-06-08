/**
 * https://developer.mozilla.org/ko/docs/Web/API/File
 * https://developer.mozilla.org/ko/docs/Web/API/File/Using_files_from_web_applications
 * https://developer.mozilla.org/ko/docs/Web/API/Blob
 * https://developer.mozilla.org/ko/docs/Web/API/FileReader
 *
 * File은 Blob을 implements한것. 그러므로 File도 이 함수 사용가능.
 * Blob 객체는 파일류의 불변하는 미가공 데이터를 나타내고, 다양한 형태로 변환이 가능.
 * 텍스트와 이진데이터로도 변환이 가능하지만 지금 나에게는 이게 필요가없음.
 *
 * 내가 원하는 형태는 이미지를 DataUrl 형태로 바꾼것.
 * html문서에 삽입할 수 있기도 하고, 이 형태 자체로 저장을 할 수 있기도 함.
 *
 * Blob을 DataUrl형태로 바꾸려면 FileReader API를 이용해야함.
 * readAsDataURL를 파일로 읽기 시작하도록 한 다음에,
 * onload와 onerror로 성공/실패에 대해 처리를 하면 되며,
 * 나는 이것을 Promise로 Wrapping했음.
 *
 * error case를 테스트하는 방법은 간단하게 readAsDataURL의 첫 번째 매개변수에 읽을수없는 이상한문자열(특수문자 등)을 넣어보면
 * onerror callback이 호출됨.
 */
export function blobToDataUrl(blob: Blob): Promise<string> {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(blob);
    reader.onload = function () {
      resolve(reader.result as string);
    };
    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

/**
 * @param src
 * @return HTMLImageElement
 *
 * dataUri로 이미지의 가로길이 세로길이같은걸 얻을 때 사용할 수도 있고,
 * input type file로 사진첨부할 때 txt확장자 파일같은거에 확장자만 png로 바꾼 파일같은것도 이걸로 거를 수 있음.
 */
export function convertSrcToHtmlImageElement(src: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = src;
  
  return new Promise((resolve, reject) => {
    image.onload = function () {
      resolve(image);
    };
    
    image.onerror = function (data: any) {
      reject(data);
    };
  });
}
