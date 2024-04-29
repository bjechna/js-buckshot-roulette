class Player {
    constructor(hp, name, slots) {
        this.hp = hp;
        this.name = name;
        this.items = [];
        this.slots = slots;
        this.is_handcuffed = false;
    }
}