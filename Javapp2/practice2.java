package Javapp2;
import javax.swing.JOptionPane;


public class practice2 {
   
   public static void main(String[] args){

    String name = JOptionPane.showInputDialog("Enter your name?");
    JOptionPane.showMessageDialog(null,"Hello "+name); 

    int age = Integer.parseInt(JOptionPane.showInputDialog("Enter your name?"));
    JOptionPane.showMessageDialog(null, "you are "+age+" years old");


   }
    

}

