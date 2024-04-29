class Dealer {
    constructor(hp, slots) {
        this.hp = hp;
        this.name = 'DEALER';
        this.items = [];
        this.slots = slots;
        this.live_shots = 0;
        this.blank_shots = 0;
        this.this_shot = '?';
        this.is_handcuffed = false;
    }
}