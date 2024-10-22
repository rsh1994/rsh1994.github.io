---
title: "Google BigQuery 입문 가이드: 특징과 실습"
date: "2022-07-08"
categories: ["Cloud", "BigQuery", "Data Engineering"]
keywords: ["Cloud", "BigQuery", "Data Engineering"]
excerpt: "Google BigQuery의 기본 개념, 특징, 기존 빅데이터 플랫폼과의 차이점 및 실습 과정을 상세히 알아봅니다."
---

![BigQuery](/images/bigquery/bigquery.png)
## 빅쿼리(BigQuery)란?
BigQuery는 페타바이트급의 데이터 저장 및 분석을 위한 구글의 클라우드 서비스입니다. 페타바이트급 Data Warehouse로서, 대규모 데이터를 저장하고 SQL을 통해 조회와 통계 작업을 수행할 수 있는 서비스입니다.

## 주요 특징

### 1. NoOps 클라우드 서비스

- 설치 불필요: 구글 클라우드 플랫폼을 통해 즉시 사용 가능
- 운영 관리 불필요: 클릭 몇 번으로 서비스 설정 완료

### 2. SQL 기반 쿼리 언어

- 기존 RDBMS SQL 문법 사용
- 높은 접근성과 사용 편의성

### 3. 강력한 성능과 확장성

```sql
-- 예제: 1000억 행, 7TB 데이터 처리
SELECT *
FROM `bigquery-samples:wikipedia_benchmark.Wiki100B`
WHERE column_name LIKE '%search_string%'
```

- 4TB 데이터 처리에 약 30초 소요
- 처리 자원:
  - 3,300개 CPU
  - 330개 하드디스크
  - 330 Gigabit 네트워크
- 비용: 약 $20

![BigQuery 성능 예시](/images/bigquery/performance.png)

### 4. 데이터 안정성

- 3중 데이터 복제
- 서로 다른 데이터센터에 분산 저장
- 데이터 유실 위험 최소화

### 5. 배치/스트리밍 지원

- 배치 처리: 대량 데이터 일괄 로딩
- 스트리밍: REST API 통한 실시간 데이터 입력
  - 초당 100,000 행 처리 가능

## 비용 정책

- 저장 비용:
  - 기본 요금: $0.02/GB
  - 90일 이상 미사용 데이터: $0.01/GB
- 사용량 기반 과금:
  - 데이터 저장량
  - 쿼리 트랜잭션

## 기존 빅데이터 플랫폼과의 차이점

### 1. 사용 편의성
- SQL 기반으로 간단한 학습 곡선
- MapReduce나 복잡한 로직 불필요

### 2. 운영 효율성
- 설치, 설정, 클러스터 관리 불필요
- 개발과 분석에 집중 가능

### 3. 인프라 활용성
- 필요한 만큼 컴퓨팅 자원 사용
- 탄력적인 리소스 확장

## 실습: BigQuery 시작하기

1. Google Cloud 프로젝트 생성
   ![프로젝트 생성](/images/bigquery/create-project.png)

2. BigQuery 콘솔 접속

3. 샘플 쿼리 실행:
```sql
SELECT
  name, gender,
  SUM(number) AS total
FROM
  `bigquery-public-data.usa_names.usa_1910_2013`
GROUP BY
  name, gender
ORDER BY
  total DESC
LIMIT
  10
```

![쿼리 결과](/images/bigquery/query-result.png)

## 결론

BigQuery는 SQL 친화적이고 운영 부담이 적으면서도 강력한 성능을 제공하는 클라우드 데이터 웨어하우스 서비스입니다. 특히 대용량 데이터 처리가 필요하지만 인프라 운영에 많은 리소스를 투입하기 어려운 조직에 적합한 솔루션입니다.

## 참고 자료

- [Google Cloud BigQuery 공식 문서](https://cloud.google.com/blog/products/bigquery/anatomy-of-a-bigquery-query)
- [BigQuery 가격 정책](https://cloud.google.com/bigquery/pricing)
