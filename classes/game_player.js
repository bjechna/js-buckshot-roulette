class GamePlayer {
    constructor(name, slots) {
        this.hp = 0;
        this.name = name;
        this.items = [];
        this.slots = slots;
        this.is_handcuffed = false;
    }

    use_item(item) {
        item.use(this);
    }

    add_item(item) {
        this.items.push(item);
    }

    show_drawed_items() {
        this.items.forEach((item) =>  {
            if (!item[1]) {
                item.show();
            }
        })
    }

    place_item(item, slot) {

    }
}