-- create table users
-- (
--     ID_users int primary key identity(1,1) not null,
--     nom_users varchar(20),
--     prenom_users varchar(20),
--     num_rue numeric(4,0),
--     ville varchar(30),
--     code_postal numeric(5,0),
--     date_inscription date,
--     identify_users varchar(20),
--     password_users numeric(4,0)
-- );

-- create table article
-- (
--     ID_article int primary key identity(1,1) not null ,
--     nom_article varchar(100),
--     description_article text,
--     lien_image varchar(255),
--     ID_users int not null FOREIGN KEY REFERENCES users(ID_users),
--     -- ID_categorie int not null FOREIGN KEY REFERENCES categorie(ID_categorie)

-- )
-- drop table if exists categorie

-- create table categorie
-- (
--     ID_categorie int primary key identity(1,1) not null ,
--     nom_categorie varchar(20)

-- )

-- insert into categorie
--     (nom_categorie)
-- values
--     ('html'),
--     ('css'),
--     ('javascripte'),
--     ('react'),
--     ('php'),
--     ('sql server')




-- ALTER TABLE article
-- add ID_categorie int not null FOREIGN KEY (ID_categorie) REFERENCES categorie(ID_categorie);

-- select *from [dbo].[categorie] 




