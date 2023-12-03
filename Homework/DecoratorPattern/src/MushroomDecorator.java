
public class MushroomDecorator extends ToppingDecorator {
    
    MushroomDecorator(Pizza pizza) {
        super(pizza);
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", mushrooms";
    }

    @Override
    public double getCost() {
        return 1.25 + super.getCost();
    }

}
