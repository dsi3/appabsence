CREATE TABLE employer(
   Id_employer int AUTO_INCREMENT,
   Role VARCHAR(50),
   emp_nom VARCHAR(50),
   emp_prenom VARCHAR(50),
   emp_cin VARCHAR(50),
   PRIMARY KEY(Id_employer)
);

CREATE TABLE Registre(
   Id_Registre int AUTO_INCREMENT,
   etat_person VARCHAR(50),
   PRIMARY KEY(Id_Registre)
);

CREATE TABLE etudiant(
   Id_etudiant int AUTO_INCREMENT,
   nom_etu VARCHAR(50),
   prenom_etu VARCHAR(50),
   cin_etu VARCHAR(50),
   PRIMARY KEY(Id_etudiant)
);

CREATE TABLE date_table(
   Id_date int AUTO_INCREMENT,
   date_time DATETIME,
   PRIMARY KEY(Id_date)
);
------------
CREATE TABLE matier(
   Id_matier int AUTO_INCREMENT,
   mat_name VARCHAR(50),
   PRIMARY KEY(Id_matier)
);

CREATE TABLE group_table(
   Id_group int AUTO_INCREMENT,
   group_name VARCHAR(50),
   Id_etudiant INT NOT NULL,
   PRIMARY KEY(Id_group),
   FOREIGN KEY(Id_etudiant) REFERENCES etudiant(Id_etudiant)
);

CREATE TABLE filieres(
   Id_filieres int AUTO_INCREMENT,
   fil_name VARCHAR(50),
   Id_matier INT NOT NULL,
   PRIMARY KEY(Id_filieres),
   FOREIGN KEY(Id_matier) REFERENCES matier(Id_matier)
);

CREATE TABLE departements(
   Id_departements int AUTO_INCREMENT,
   dep_name VARCHAR(50),
   Id_filieres INT NOT NULL,
   PRIMARY KEY(Id_departements),
   FOREIGN KEY(Id_filieres) REFERENCES filieres(Id_filieres)
);

CREATE TABLE enregistrer(
   Id_employer INT,
   Id_Registre INT,
   PRIMARY KEY(Id_employer, Id_Registre),
   FOREIGN KEY(Id_employer) REFERENCES employer(Id_employer),
   FOREIGN KEY(Id_Registre) REFERENCES Registre(Id_Registre)
);

CREATE TABLE concerne(
   Id_Registre INT,
   Id_etudiant INT,
   PRIMARY KEY(Id_Registre, Id_etudiant),
   FOREIGN KEY(Id_Registre) REFERENCES Registre(Id_Registre),
   FOREIGN KEY(Id_etudiant) REFERENCES etudiant(Id_etudiant)
);

CREATE TABLE correspond(
   Id_Registre INT,
   Id_date INT,
   PRIMARY KEY(Id_Registre, Id_date),
   FOREIGN KEY(Id_Registre) REFERENCES Registre(Id_Registre),
   FOREIGN KEY(Id_date) REFERENCES date_table(Id_date)
);

CREATE TABLE Asso_12(
   Id_Registre INT,
   Id_matier INT,
   PRIMARY KEY(Id_Registre, Id_matier),
   FOREIGN KEY(Id_Registre) REFERENCES Registre(Id_Registre),
   FOREIGN KEY(Id_matier) REFERENCES matier(Id_matier)
);
