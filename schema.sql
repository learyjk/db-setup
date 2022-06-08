DROP TABLE IF EXISTS "reviews";

CREATE TABLE "reviews" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INT,
  "rating" SMALLINT CHECK (rating > 0 AND rating < 6),
  "date" BIGINT,
  "summary" TEXT,
  "body" TEXT,
  "recommend" BOOLEAN,
  "reported" BOOLEAN,
  "reviewer_name" TEXT,
  "reviewer_email" TEXT,
  "response" TEXT,
  "helpfulness" INT
);

DROP TABLE IF EXISTS "characteristics";

CREATE TABLE "characteristics" (
  "id" SERIAL PRIMARY KEY,
  "product_id" INT,
  "name" TEXT
);

DROP TABLE IF EXISTS "characteristics_reviews";

CREATE TABLE "characteristics_reviews" (
  "id" SERIAL PRIMARY KEY,
  "characteristic_id" INT,
  "review_id" INT,
  "value" SMALLINT CHECK (value > 0 AND value < 6)
);


DROP TABLE IF EXISTS "reviews_photos";

CREATE TABLE "reviews_photos" (
  "id" SERIAL PRIMARY KEY,
  "review_id" INT,
  "url" TEXT
);

