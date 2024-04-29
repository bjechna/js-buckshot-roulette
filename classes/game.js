class Game {
    constructor(shots, max_hp, items) {
        this.turn = "p";
        this.items_get = 0;
        this.shots = shots;
        this.max_hp = max_hp;
        this.items = items;
        this.is_game_active = false;
    }

    start_game() {
        this.is_game_active = true;
    }

    draw_shots() {

    }

    show_shots() {

    }

    suffle_shots(shots) {

    }

    draw_items(items_number, items) {

    }

    start_round() {

    }

    end_game() {
        this.is_game_active = false;
    }

    end_round() {

    }

    change_turn(turn) {

    }
}