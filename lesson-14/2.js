/**
 * Задача 2.
 *
 * Добавьте роботу геттер и сеттер для приватного свойства energy.
 * Нужно, чтобы внешний код мог узнать заряд батареи робота.
 *
 * Условия:
 * - заданную форму конструктора включая его параметры менять нельзя — можно только дополнять.
 *
 * Генерировать ошибки если:
 * - новый заряд батареи устанавливается в значении меньшем, чем 0;
 * - новый заряд батареи устанавливается в значении большем, чем значение MAX_ENERGY_CAPACITY;
 * - при создании экземпляра CleanerRobot изначальный уровень энергии заряда вне рамок допустимого диапазона.
 */

function CleanerRobot(initialEnergy = 0 /* Изначальный заряд батареи */) {
    this.getEnergy = getEnergy;
    this.setEnergy = setEnergy;

    const MAX_ENERGY_CAPACITY = 100; /* Максимальная ёмкость батареи. */
    let energy = null;


    this.setEnergy(initialEnergy);

    function getEnergy() {
    	return energy
    }

    function setEnergy(val) {
    	if(val < 0 ){
    		throw new Error('New energy level can not be less than 0');
    	}

    	if( val > MAX_ENERGY_CAPACITY){
    		throw new Error('New energy level can not be more than 100.');
    	}

    	if(typeof val !== 'number'){
    		throw new Error('Your value must be a number')
    	}

    	energy = val;
    	return energy;
    }

}

const cleanerRobot = new CleanerRobot(22);

/* Текущий заряд батареи: 22 */
console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

cleanerRobot.setEnergy(55);

/* Текущий заряд батареи: 55 */
console.log(`Текущий заряд батареи: ${cleanerRobot.getEnergy()}`);

try {
    new CleanerRobot(-1);
} catch (error) {
    /* Error: New energy level can not be less than 0. */
    console.log(`${error.name}: ${error.message}`);
}

try {
    cleanerRobot.setEnergy(-22);
} catch (error) {
     // Error: New energy level can not be less than 0. 
    console.log(`${error.name}: ${error.message}`);
}

try {
    cleanerRobot.setEnergy(101);
} catch (error) {
    /* Error: New energy level can not be more than 100. */
    console.log(`${error.name}: ${error.message}`);
}

try {
    cleanerRobot.setEnergy('101Text');
} catch (error) {
    /* Error: New energy level can not be more than 100. */
    console.log(`${error.name}: ${error.message}`);
}

exports.CleanerRobot = CleanerRobot;