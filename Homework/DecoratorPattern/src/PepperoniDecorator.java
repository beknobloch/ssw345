
public class PepperoniDecorator extends ToppingDecorator {
    
    PepperoniDecorator(Pizza pizza) {
        super(pizza);
    }

    @Override
    public String getDescription() {
        return super.getDescription() + ", pepperoni";
    }

    @Override
    public double getCost() {
        return 1.50 + super.getCost();
    }

}
