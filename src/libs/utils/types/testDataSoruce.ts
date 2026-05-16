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

export interface TestEventDataSource extends TestDataSource {
  text: string;
  image: string;
  audio: string;
  message: string;
  nonReplaceableText: string;
}

export type TestDataSourceBundle = TestDataSourceWithNote &
  SystemTestDataSource &
  TestEventDataSource;
