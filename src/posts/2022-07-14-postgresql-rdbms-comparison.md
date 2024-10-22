---
title: "PostgreSQL과 관계형 데이터베이스 시스템 비교 분석"
date: "2022-07-14"
categories: ["Database", "PostgreSQL", "RDBMS"]
excerpt: "PostgreSQL의 특징, 데이터 타입, 장단점 및 적절한 사용 사례에 대해 상세히 알아봅니다."
---
![PostgreSQL](/images/postgresql/postgresql.png)

## 소개

관계형 데이터 모델(행과 열로 구성)은 현재 데이터베이스 관리 시스템의 대다수를 차지하고 있습니다. NoSQL과 NewSQL 등 새로운 데이터 모델이 등장했지만, RDBMS는 여전히 데이터 저장과 관리의 표준으로 자리잡고 있습니다.

## PostgreSQL 개요

PostgreSQL(Postgre)은 "세계에서 가장 진보된 오픈소스 관계형 데이터베이스"를 표방하며, 확장성과 표준 준수를 주요 목표로 합니다. 객체 관계형(object-relational) 데이터베이스로서, 테이블 상속과 함수 오버로딩 같은 객체 데이터베이스 특성도 포함합니다.

### 주요 특징: 동시성(Concurrency)

- MVCC(Multiversion Concurrency Control) 구현
- ACID 트랜잭션 보장
 - 원자성(Atomically)
 - 일관성(Consistency)
 - 격리성(Isolation)
 - 내구성(Durability)
- 읽기 작업 시 잠금 없이 처리 가능

## PostgreSQL의 데이터 타입

### 1. Numeric 타입
- `bigint`: 8바이트 부호 있는 정수
- `bigserial`: 자동 증가 8바이트 정수
- `double precision`: 8바이트 부동 소수점
- `integer`: 4바이트 부호 있는 정수
- `serial`: 자동 증가 4바이트 정수
- `number/decimal`: 정확도 조절 가능 (금액 등에 권장)
- `real`: 4바이트 부동 소수점
- `smallint`: 2바이트 부호 있는 정수
- `smallserial`: 자동 증가 2바이트 정수

### 2. Character 타입
- `character`: 고정 길이 문자열
- `varchar`: 가변 길이 문자열 (제한 있음)
- `text`: 무제한 길이 문자열

### 3. Date/Time 타입
- `date`: 날짜
- `interval`: 시간 간격
- `time`: 시간 (시간대 미포함)
- `time with time zone`: 시간대 포함 시간
- `timestamp`: 타임스탬프
- `timestamp with time zone`: 시간대 포함 타임스탬프

### 4. Geometric 타입
- `box`, `circle`, `line`, `lseg`, `path`, `point`, `polygon`

### 5. Network 타입
- `cidr`: IPv4/IPv6 네트워크
- `inet`: IPv4/IPv6 호스트
- `macaddr`: MAC 주소

### 6. 기타 타입
- Bit String: `bit`, `bit varying`
- Text Search: `tsquery`, `tsvector`
- JSON: `json`, `jsonb`
- 기타: `boolean`, `bytea`, `money`, `uuid`, `xml`

## PostgreSQL의 장점

1. **SQL 표준 준수**
  - SQL:2011 규정 179개 중 160개 지원
  - 다수의 선택적 기능 지원

2. **오픈소스 & 커뮤니티 주도**
  - 활발한 커뮤니티 지원
  - 풍부한 문서와 리소스

3. **뛰어난 확장성**
  - 프로그래밍 방식의 즉시 확장 가능
  - 동적 로딩 지원

## PostgreSQL의 단점

1. **메모리 성능**
  - 새 연결마다 약 10MB 메모리 할당
  - 다중 연결 시 메모리 사용량 급증
  
2. **상대적 낮은 인기도**
  - MySQL 대비 적은 서드파티 도구
  - 전문 인력 부족

## 적합한 사용 사례

### 사용 권장 케이스
1. **데이터 무결성 중요 시**
  - ACID 완벽 준수
  - MVCC 통한 데이터 일관성

2. **시스템 통합 필요 시**
  - 다양한 언어/플랫폼 호환
  - 마이그레이션 용이

3. **복잡한 연산 필요 시**
  - 멀티 CPU 활용
  - 동시 사용자 처리 우수

### 비권장 케이스
1. **속도 중시**
  - 읽기 작업 성능 상대적 저조
  
2. **단순 설정 필요 시**
  - 복잡한 초기 설정 필요
  
3. **단순 복제 작업**
  - 제한적인 복제 구성
  - MySQL 대비 복잡한 구현

## 결론

SQLite, MySQL, PostgreSQL은 각각 고유한 특성과 한계를 가진 인기 있는 오픈소스 RDBMS입니다. 데이터베이스 선택 시에는 단순히 성능이나 기능만이 아닌, 프로젝트의 특성과 요구사항을 종합적으로 고려해야 합니다.

## 참고 자료
- [Simple is Beautiful](https://smoh.tistory.com/370)