-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `NIK` VARCHAR(255) NOT NULL,
    `nama_lengkap` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `haki` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uid` INTEGER NOT NULL,
    `jenis_ciptaan` VARCHAR(255) NOT NULL,
    `judul_ciptaan` VARCHAR(255) NOT NULL,
    `tanggal_ciptaan` VARCHAR(255) NOT NULL,
    `negara_ciptaan` VARCHAR(255) NOT NULL,
    `kota_ciptaan` VARCHAR(255) NOT NULL,
    `deskripsi_ciptaan` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `barcode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hid` INTEGER NOT NULL,

    UNIQUE INDEX `barcode_hid_key`(`hid`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
