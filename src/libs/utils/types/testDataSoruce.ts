export interface TestDataSource {
  text: string;
  image: string;
  audio: string;
}

export interface TestDataSourceWithNote extends TestDataSource {
  text: string;
  image: string;
  audio: string;
  note: string;
}

export interface SystemTestDataSource extends TestDataSource {
  text: string;
  image: string;
  audio: string;
  switches: string;
  variables: string;
}
