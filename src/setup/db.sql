CREATE TABLE "model_type"(
    "model_type_id" SERIAL NOT NULL,
    "model_type_name" VARCHAR(60) NOT NULL,
    "model_type_marka" VARCHAR(60) NOT NULL,
    "model_type_engine" DECIMAL(8, 2) NOT NULL,
    "model_type_year" VARCHAR(23) NOT NULL,
    "model_type_color" VARCHAR(23) NOT NULL,
    "model_type_distance" INTEGER NOT NULL,
    "model_type_status" VARCHAR(60) NOT NULL,
    "model_type_descrption" TEXT NOT NULL
);
ALTER TABLE
    "model_type" ADD PRIMARY KEY("model_type_id");
CREATE TABLE "models"(
    "model_id" SERIAL NOT NULL,
    "model_name" VARCHAR(56) NOT NULL,
    "model_brand" VARCHAR(255) NOT NULL,
    "model_type_id" INTEGER NOT NULL
);
ALTER TABLE
    "models" ADD PRIMARY KEY("model_id");
CREATE TABLE "admins"(
    "id" SERIAL NOT NULL,
    "username" VARCHAR(32) NOT NULL,
    "pasword" VARCHAR(60) NOT NULL,
    "model_id" INTEGER NOT NULL
);
ALTER TABLE
    "admins" ADD PRIMARY KEY("id");
ALTER TABLE
    "models" ADD CONSTRAINT "models_model_type_id_foreign" FOREIGN KEY("model_type_id") REFERENCES "model_type"("model_type_id");
ALTER TABLE
    "admins" ADD CONSTRAINT "admins_model_id_foreign" FOREIGN KEY("model_id") REFERENCES "models"("model_id");

INSERT INTO admins (username, pasword) VALUES ("admin", "admin");