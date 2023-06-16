
CREATE TABLE `user` (
  `Id` int(4) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `contact` varchar(15) NOT NULL,
  `comment` varchar(225) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `user` (`Id`, `firstname`, `lastname`, `email`, `contact`, `comment`, `status`) VALUES
(1, 'Rwakasiisi', 'Edwin', 'erwakasiisi@gmail.com', '+256756342045', 'Great', 'active'),
(2, 'Atukunda', 'Alvin', 'atukundaalvin@gmail.com', '+256705560806', 'Excellent and Good', 'active'),
(3, 'John', 'Doe', 'johndoe@example.com', '1234567890', 'This is comment 1', 'active'),
(4, 'Jane', 'Smith', 'janesmith@example.com', '9876543210', 'This is changed', 'active'),
(5, 'Mike', 'Johnson', 'mikejohnson@example.com', '4567891230', 'This has been modified', 'active'),
(6, 'Sarah', 'Williams', 'sarahwilliams@example.com', '7890123456', 'This is comment 4', 'active'),
(7, 'David', 'Brown', 'davidbrown@example.com', '5678901234', 'This is comment 5', 'active'),
(8, 'Alice', 'Taylor', 'alicetaylor@example.com', '7890123456', 'This is comment 6', 'active'),
(9, 'Robert', 'Wilson', 'robertwilson@example.com', '2345678901', 'This is comment 7', 'active'),
(10, 'Emily', 'Anderson', 'emilyanderson@example.com', '9012345678', 'This is comment 8', 'active'),
(11, 'Michael', 'Thomas', 'michaelthomas@example.com', '3456789012', 'This is comment 9', 'active'),
(12, 'Olivia', 'Roberts', 'oliviaroberts@example.com', '6789012345', 'This is comment 10', 'active'),
(13, 'Daniel', 'Clark', 'danielclark@example.com', '1234567890', 'This is comment 11', 'active'),
(14, 'Sophia', 'Lee', 'sophialee@example.com', '9876543210', 'This is comment 12', 'active'),
(15, 'Christopher', 'White', 'christopherwhite@example.com', '4567891230', 'This is comment 13', 'active'),
(17, 'Matthew', 'Martin', 'matthewmartin@example.com', '5678901234', 'This is comment 15', 'active'),
(18, 'Isabella', 'Adams', 'isabellaadams@example.com', '7890123456', 'This is comment 16', 'active'),
(19, 'James', 'Wilson', 'jameswilson@example.com', '2345678901', 'This is comment 17', 'active'),
(20, 'Emma', 'Miller', 'emmamiller@example.com', '9012345678', 'This is comment 18', 'active');


ALTER TABLE `user`
  ADD PRIMARY KEY (`Id`);

ALTER TABLE `user`
  MODIFY `Id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

