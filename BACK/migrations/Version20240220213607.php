<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240220213607 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE garage (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(32) NOT NULL, description LONGTEXT NOT NULL, am_opening_time TIME NOT NULL, pm_opening_time TIME NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE picture (id INT AUTO_INCREMENT NOT NULL, vehicule_id INT NOT NULL, title VARCHAR(64) NOT NULL, slug VARCHAR(128) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_16DB4F894A4A3511 (vehicule_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE services (id INT AUTO_INCREMENT NOT NULL, garage_id INT NOT NULL, name VARCHAR(64) NOT NULL, price INT NOT NULL, description LONGTEXT NOT NULL, icone LONGTEXT NOT NULL, INDEX IDX_7332E169C4FFF555 (garage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE temoignages (id INT AUTO_INCREMENT NOT NULL, garage_id INT NOT NULL, first_name VARCHAR(32) NOT NULL, last_name VARCHAR(32) NOT NULL, commentary LONGTEXT NOT NULL, note INT NOT NULL, approved INT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_840C8612C4FFF555 (garage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, garage_id INT DEFAULT NULL, first_name VARCHAR(32) NOT NULL, last_name VARCHAR(32) NOT NULL, email VARCHAR(64) NOT NULL, password VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, api_token VARCHAR(255) NOT NULL, roles JSON NOT NULL, INDEX IDX_8D93D649C4FFF555 (garage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE vehicules (id INT AUTO_INCREMENT NOT NULL, garage_id INT DEFAULT NULL, price DOUBLE PRECISION NOT NULL, title VARCHAR(64) NOT NULL, year INT NOT NULL, caracteristics LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', equipments LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_78218C2DC4FFF555 (garage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE picture ADD CONSTRAINT FK_16DB4F894A4A3511 FOREIGN KEY (vehicule_id) REFERENCES vehicules (id)');
        $this->addSql('ALTER TABLE services ADD CONSTRAINT FK_7332E169C4FFF555 FOREIGN KEY (garage_id) REFERENCES garage (id)');
        $this->addSql('ALTER TABLE temoignages ADD CONSTRAINT FK_840C8612C4FFF555 FOREIGN KEY (garage_id) REFERENCES garage (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649C4FFF555 FOREIGN KEY (garage_id) REFERENCES garage (id)');
        $this->addSql('ALTER TABLE vehicules ADD CONSTRAINT FK_78218C2DC4FFF555 FOREIGN KEY (garage_id) REFERENCES garage (id)');
        $this->addSql('INSERT INTO garage(name, description, am_opening_time, pm_opening_time, created_at) VALUES ("Garage Parrot", "Site du Garage Parrot", "08:00:00", "18:00:00", "2024-02-20 22:44:00")');
        $this->addSql('INSERT INTO user(garage_id, first_name, last_name, email, password, created_at, updated_at, api_token, roles) VALUES(1, "Vincent", "Parrot", "v.parrot@gmail.com", "$2y$13$764HgW8jIxe83F26/7YCNeWaEuuheP1NceapTxNXjTdytdbxph/fS", "2024-02-20 21:13:27",NULL,"8d08df47b5048515d2fce678f1025aec077569c0","[\"ROLE_USER\",\"ROLE_ADMIN\"]")');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE picture DROP FOREIGN KEY FK_16DB4F894A4A3511');
        $this->addSql('ALTER TABLE services DROP FOREIGN KEY FK_7332E169C4FFF555');
        $this->addSql('ALTER TABLE temoignages DROP FOREIGN KEY FK_840C8612C4FFF555');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649C4FFF555');
        $this->addSql('ALTER TABLE vehicules DROP FOREIGN KEY FK_78218C2DC4FFF555');
        $this->addSql('DROP TABLE garage');
        $this->addSql('DROP TABLE picture');
        $this->addSql('DROP TABLE services');
        $this->addSql('DROP TABLE temoignages');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE vehicules');
    }
}
